"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlossomScheduleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlossomScheduleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BlossomScheduleInfo", [
            { no: 1, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "finish_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "refresh_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "circle_camp_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { progress: 0, state: 0, finishProgress: 0, refreshId: 0, circleCampId: 0, round: 0 };
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
                case /* uint32 progress */ 1:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 state */ 5:
                    message.state = reader.uint32();
                    break;
                case /* uint32 finish_progress */ 10:
                    message.finishProgress = reader.uint32();
                    break;
                case /* uint32 refresh_id */ 12:
                    message.refreshId = reader.uint32();
                    break;
                case /* uint32 circle_camp_id */ 2:
                    message.circleCampId = reader.uint32();
                    break;
                case /* uint32 round */ 14:
                    message.round = reader.uint32();
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
        /* uint32 progress = 1; */
        if (message.progress !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.progress);
        /* uint32 state = 5; */
        if (message.state !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.state);
        /* uint32 finish_progress = 10; */
        if (message.finishProgress !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.finishProgress);
        /* uint32 refresh_id = 12; */
        if (message.refreshId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.refreshId);
        /* uint32 circle_camp_id = 2; */
        if (message.circleCampId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.circleCampId);
        /* uint32 round = 14; */
        if (message.round !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.round);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlossomScheduleInfo
 */
exports.BlossomScheduleInfo = new BlossomScheduleInfo$Type();
