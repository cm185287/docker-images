const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/NR1_DigitalCoupon")
const agg = [
    {
        '$group': {
            '_id': {
                'PosPromotionId': '$PosPromotionId',
                'TenantId': '$TenantId',
                'OriginPromotionId': '$OriginPromotionId'
            },
            'Id': {
                '$first': '$_id'
            },
            'Name': {
                '$first': '$Name'
            },
            'Description': {
                '$first': '$Description'
            },
            'PromotionCode': {
                '$first': '$PromotionCode'
            },
            'PromotionType': {
                '$first': '$PromotionType'
            },
            'StartDate': {
                '$first': '$StartDate'
            },
            'EndDate': {
                '$first': '$EndDate'
            },
            'IsActive': {
                '$first': '$IsActive'
            },
            'Requirements': {
                '$first': '$Requirements'
            },
            'Rewards': {
                '$first': '$Rewards'
            },
            'Overrides': {
                '$first': '$Overrides'
            }
        }
    }, {
        '$project': {
            '_id': '$Id',
            'Name': '$Name',
            'Description': '$Description',
            'PromotionCode': '$PromotionCode',
            'PromotionType': '$PromotionType',
            'StartDate': '$StartDate',
            'EndDate': '$EndDate',
            'IsActive': '$IsActive',
            'Requirements': '$Requirements',
            'Rewards': '$Rewards',
            'Overrides': '$Overrides',
            'TenantId': '$_id.TenantId',
            'PosPromotionId': '$_id.PosPromotionId',
            'OriginPromotionId': '$_id.OriginPromotionId'
        }
    }, {
        '$out': "UniquePromotions"
    }
];
const collation = {
    collation: {
        locale: 'en',
        strength: 2
    }
};
const coll = client.db("NR1_DigitalCoupon").collection("Promotions");
coll.aggregate(agg, collation).toArray();