"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterLittleDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AsterLittleStageState_1 = require("./AsterLittleStageState");
// @generated message type with reflection information, may provide speed optimized methods
class AsterLittleDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AsterLittleDetailInfo", [
            { no: 9, name: "stage_begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "stage_state", kind: "enum", T: () => ["AsterLittleStageState", AsterLittleStageState_1.AsterLittleStageState, "ASTER_LITTLE_STAGE_STATE_"] },
            { no: 14, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageBeginTime: 0, isOpen: false, stageState: 0, stageId: 0, beginTime: 0 };
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
                case /* uint32 stage_begin_time */ 9:
                    message.stageBeginTime = reader.uint32();
                    break;
                case /* bool is_open */ 8:
                    message.isOpen = reader.bool();
                    break;
                case /* AsterLittleStageState stage_state */ 5:
                    message.stageState = reader.int32();
                    break;
                case /* uint32 stage_id */ 14:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 begin_time */ 6:
                    message.beginTime = reader.uint32();
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
        /* uint32 stage_begin_time = 9; */
        if (message.stageBeginTime !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.stageBeginTime);
        /* bool is_open = 8; */
        if (message.isOpen !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isOpen);
        /* AsterLittleStageState stage_state = 5; */
        if (message.stageState !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.stageState);
        /* uint32 stage_id = 14; */
        if (message.stageId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 begin_time = 6; */
        if (message.beginTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.beginTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AsterLittleDetailInfo
 */
exports.AsterLittleDetailInfo = new AsterLittleDetailInfo$Type();
