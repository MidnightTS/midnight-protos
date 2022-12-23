"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeSprintBoatSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeSprintBoatSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeSprintBoatSettleNotify", [
            { no: 6, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "left_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_PLFMJPNPPLI", kind: "scalar", jsonName: "Unk3300PLFMJPNPPLI", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "total_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "Unk3300_MEEKFJJIOKE", kind: "scalar", jsonName: "Unk3300MEEKFJJIOKE", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { score: 0, leftTime: 0, isSuccess: false, groupId: 0, unk3300PLFMJPNPPLI: 0, totalNum: 0, isNewRecord: false, unk3300MEEKFJJIOKE: 0 };
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
                case /* uint32 score */ 6:
                    message.score = reader.uint32();
                    break;
                case /* uint32 left_time */ 2:
                    message.leftTime = reader.uint32();
                    break;
                case /* bool is_success */ 4:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 group_id */ 5:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 Unk3300_PLFMJPNPPLI = 12 [json_name = "Unk3300PLFMJPNPPLI"];*/ 12:
                    message.unk3300PLFMJPNPPLI = reader.uint32();
                    break;
                case /* uint32 total_num */ 10:
                    message.totalNum = reader.uint32();
                    break;
                case /* bool is_new_record */ 15:
                    message.isNewRecord = reader.bool();
                    break;
                case /* uint32 Unk3300_MEEKFJJIOKE = 14 [json_name = "Unk3300MEEKFJJIOKE"];*/ 14:
                    message.unk3300MEEKFJJIOKE = reader.uint32();
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
        /* uint32 score = 6; */
        if (message.score !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 left_time = 2; */
        if (message.leftTime !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.leftTime);
        /* bool is_success = 4; */
        if (message.isSuccess !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 group_id = 5; */
        if (message.groupId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 Unk3300_PLFMJPNPPLI = 12 [json_name = "Unk3300PLFMJPNPPLI"]; */
        if (message.unk3300PLFMJPNPPLI !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300PLFMJPNPPLI);
        /* uint32 total_num = 10; */
        if (message.totalNum !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.totalNum);
        /* bool is_new_record = 15; */
        if (message.isNewRecord !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* uint32 Unk3300_MEEKFJJIOKE = 14 [json_name = "Unk3300MEEKFJJIOKE"]; */
        if (message.unk3300MEEKFJJIOKE !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300MEEKFJJIOKE);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeSprintBoatSettleNotify
 */
exports.SummerTimeSprintBoatSettleNotify = new SummerTimeSprintBoatSettleNotify$Type();
