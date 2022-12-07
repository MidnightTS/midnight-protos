"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLimitedShopGoods = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class HomeLimitedShopGoods$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeLimitedShopGoods", [
            { no: 8, name: "Unk3300_EHKFICBACKC", kind: "scalar", jsonName: "Unk3300EHKFICBACKC", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_OODCCOAIGHI", kind: "scalar", jsonName: "Unk3300OODCCOAIGHI", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_DBJCMMBHBNI", kind: "scalar", jsonName: "Unk3300DBJCMMBHBNI", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "bought_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "goods_item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 4, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { unk3300EHKFICBACKC: 0, unk3300OODCCOAIGHI: 0, unk3300DBJCMMBHBNI: 0, boughtNum: 0, costItemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_EHKFICBACKC = 8 [json_name = "Unk3300EHKFICBACKC"];*/ 8:
                    message.unk3300EHKFICBACKC = reader.uint32();
                    break;
                case /* uint32 Unk3300_OODCCOAIGHI = 10 [json_name = "Unk3300OODCCOAIGHI"];*/ 10:
                    message.unk3300OODCCOAIGHI = reader.uint32();
                    break;
                case /* uint32 Unk3300_DBJCMMBHBNI = 12 [json_name = "Unk3300DBJCMMBHBNI"];*/ 12:
                    message.unk3300DBJCMMBHBNI = reader.uint32();
                    break;
                case /* uint32 bought_num */ 5:
                    message.boughtNum = reader.uint32();
                    break;
                case /* ItemParam goods_item */ 2:
                    message.goodsItem = ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.goodsItem);
                    break;
                case /* repeated ItemParam cost_item_list */ 4:
                    message.costItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_EHKFICBACKC = 8 [json_name = "Unk3300EHKFICBACKC"]; */
        if (message.unk3300EHKFICBACKC !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300EHKFICBACKC);
        /* uint32 Unk3300_OODCCOAIGHI = 10 [json_name = "Unk3300OODCCOAIGHI"]; */
        if (message.unk3300OODCCOAIGHI !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300OODCCOAIGHI);
        /* uint32 Unk3300_DBJCMMBHBNI = 12 [json_name = "Unk3300DBJCMMBHBNI"]; */
        if (message.unk3300DBJCMMBHBNI !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300DBJCMMBHBNI);
        /* uint32 bought_num = 5; */
        if (message.boughtNum !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.boughtNum);
        /* ItemParam goods_item = 2; */
        if (message.goodsItem)
            ItemParam_1.ItemParam.internalBinaryWrite(message.goodsItem, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam cost_item_list = 4; */
        for (let i = 0; i < message.costItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeLimitedShopGoods
 */
exports.HomeLimitedShopGoods = new HomeLimitedShopGoods$Type();
