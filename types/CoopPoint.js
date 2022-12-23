"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopPoint = exports.CoopPoint_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum CoopPoint.State
 */
var CoopPoint_State;
(function (CoopPoint_State) {
    /**
     * @generated from protobuf enum value: STATE_UNSTARTED = 0;
     */
    CoopPoint_State[CoopPoint_State["UNSTARTED"] = 0] = "UNSTARTED";
    /**
     * @generated from protobuf enum value: STATE_STARTED = 1;
     */
    CoopPoint_State[CoopPoint_State["STARTED"] = 1] = "STARTED";
    /**
     * @generated from protobuf enum value: STATE_FINISHED = 2;
     */
    CoopPoint_State[CoopPoint_State["FINISHED"] = 2] = "FINISHED";
})(CoopPoint_State = exports.CoopPoint_State || (exports.CoopPoint_State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CoopPoint$Type extends runtime_5.MessageType {
    constructor() {
        super("CoopPoint", [
            { no: 6, name: "self_confidence", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "state", kind: "enum", T: () => ["CoopPoint.State", CoopPoint_State, "STATE_"] },
            { no: 4, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { selfConfidence: 0, state: 0, id: 0 };
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
                case /* uint32 self_confidence */ 6:
                    message.selfConfidence = reader.uint32();
                    break;
                case /* CoopPoint.State state */ 14:
                    message.state = reader.int32();
                    break;
                case /* uint32 id */ 4:
                    message.id = reader.uint32();
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
        /* uint32 self_confidence = 6; */
        if (message.selfConfidence !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.selfConfidence);
        /* CoopPoint.State state = 14; */
        if (message.state !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.state);
        /* uint32 id = 4; */
        if (message.id !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoopPoint
 */
exports.CoopPoint = new CoopPoint$Type();
