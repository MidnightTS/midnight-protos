"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeAchievementRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class TakeAchievementRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeAchievementRewardRsp", [
            { no: 6, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { itemList: [], retcode: 0, idList: [] };
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
                case /* repeated ItemParam item_list */ 6:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idList.push(reader.uint32());
                    else
                        message.idList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated ItemParam item_list = 6; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(6, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 id_list = 13; */
        if (message.idList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.idList.length; i++)
                writer.uint32(message.idList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeAchievementRewardRsp
 */
exports.TakeAchievementRewardRsp = new TakeAchievementRewardRsp$Type();