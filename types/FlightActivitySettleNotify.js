"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightActivitySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FlightActivitySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FlightActivitySettleNotify", [
            { no: 10, name: "left_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_MEEKFJJIOKE", kind: "scalar", jsonName: "Unk3300MEEKFJJIOKE", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_new_record", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "Unk3300_PLFMJPNPPLI", kind: "scalar", jsonName: "Unk3300PLFMJPNPPLI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { leftTime: 0, totalNum: 0, groupId: 0, score: 0, unk3300MEEKFJJIOKE: 0, isNewRecord: false, isSuccess: false, unk3300PLFMJPNPPLI: 0 };
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
                case /* uint32 left_time */ 10:
                    message.leftTime = reader.uint32();
                    break;
                case /* uint32 total_num */ 6:
                    message.totalNum = reader.uint32();
                    break;
                case /* uint32 group_id */ 13:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 score */ 15:
                    message.score = reader.uint32();
                    break;
                case /* uint32 Unk3300_MEEKFJJIOKE = 9 [json_name = "Unk3300MEEKFJJIOKE"];*/ 9:
                    message.unk3300MEEKFJJIOKE = reader.uint32();
                    break;
                case /* bool is_new_record */ 4:
                    message.isNewRecord = reader.bool();
                    break;
                case /* bool is_success */ 1:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_PLFMJPNPPLI = 11 [json_name = "Unk3300PLFMJPNPPLI"];*/ 11:
                    message.unk3300PLFMJPNPPLI = reader.uint32();
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
        /* uint32 left_time = 10; */
        if (message.leftTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.leftTime);
        /* uint32 total_num = 6; */
        if (message.totalNum !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.totalNum);
        /* uint32 group_id = 13; */
        if (message.groupId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 score = 15; */
        if (message.score !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.score);
        /* uint32 Unk3300_MEEKFJJIOKE = 9 [json_name = "Unk3300MEEKFJJIOKE"]; */
        if (message.unk3300MEEKFJJIOKE !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300MEEKFJJIOKE);
        /* bool is_new_record = 4; */
        if (message.isNewRecord !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isNewRecord);
        /* bool is_success = 1; */
        if (message.isSuccess !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_PLFMJPNPPLI = 11 [json_name = "Unk3300PLFMJPNPPLI"]; */
        if (message.unk3300PLFMJPNPPLI !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300PLFMJPNPPLI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FlightActivitySettleNotify
 */
exports.FlightActivitySettleNotify = new FlightActivitySettleNotify$Type();
