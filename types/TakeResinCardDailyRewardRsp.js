"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeResinCardDailyRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class TakeResinCardDailyRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeResinCardDailyRewardRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "item_vec", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 13, name: "product_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, itemVec: [], productConfigId: 0 };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ItemParam item_vec */ 15:
                    message.itemVec.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 product_config_id */ 13:
                    message.productConfigId = reader.uint32();
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated ItemParam item_vec = 15; */
        for (let i = 0; i < message.itemVec.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemVec[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 product_config_id = 13; */
        if (message.productConfigId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.productConfigId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeResinCardDailyRewardRsp
 */
exports.TakeResinCardDailyRewardRsp = new TakeResinCardDailyRewardRsp$Type();
