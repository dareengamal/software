n

export const getshippment = async (req, res) => {
    const shippment = await shippment.findOneAndUpdate({ order_Id: req.params.order_id });
    res.status(200).send({ body: shippment, message: 'Successfully retrieved shippment' });
};

export const createshippment = async (req, res) => {
    try {
        console.log('[createshippment body]', req.body)
        const { order_id } = req.body;
        if (!order_id) return res.status(403).send('order_id is required');

        const shippment = await shippment.findOne({ order_id: order_id });
        if (!shippment) return res.status(403).send('Document already exists, cannot create');

        const shippmentStatus = 'CREATED';

        const newshippmentDocument = await shippment.create({ order_id: order_id,shippment_status: shippmentStatus });
        return res.status(200).send({ body: newshippmentDocument, message: 'Successfully created shippment' });
    }
    catch (e) {
        console.log('[createshippment] e', e)
    }
}

export const updateshippment = async (req, res) => {
    try {
        // const { order_id } = createShipment.order_id;
        const { order_id } = req.body;
        console.log('order_id', order_id);
        if (!order_id) return res.status(403).send('order_id is required');

        const shippment = await shippment.findOne({ order_id: order_id });
        if (!shippment) return res.status(403).send('could not find order_id');

        // fetch shipment from db for this order_id
        // determine what the current status is
        // determine what the next status should be
        // update the database with new
        const currentshippmentStatus = shippment.shippment_status;
        const nextshippmentStatus = {
            CREATED: 'SHIPPED',
            SHIPPED: 'DELIVERED'
        }[currentshippmentStatus];

        const updatedDocument = await shippment.updateOne({ order_id: order_id }, { shippment_status: nextshippmentStatus }, { returnDocument: true });
        return res.status(200).send({ body: updatedDocument, message: 'Successfully updated order status' });

    } catch (e) {
        console.log('[updateshippment] e', e)
    }
}