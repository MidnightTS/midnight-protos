"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectAsterMidDifficultyRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SelectAsterMidDifficultyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SelectAsterMidDifficultyRsp", [
            { no: 15, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, gadgetEntityId: 0, retcode: 0, difficultyId: 0 };
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
                case /* uint32 schedule_id */ 15:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 gadget_entity_id */ 12:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 difficulty_id */ 8:
                    message.difficultyId = reader.uint32();
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
        /* uint32 schedule_id = 15; */
        if (message.scheduleId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* uint32 gadget_entity_id = 12; */
        if (message.gadgetEntityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.gadgetEntityId);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 difficulty_id = 8; */
        if (message.difficultyId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.difficultyId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SelectAsterMidDifficultyRsp
 */
exports.SelectAsterMidDifficultyRsp = new SelectAsterMidDifficultyRsp$Type();
