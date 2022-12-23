"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investigation = exports.Investigation_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum Investigation.State
 */
var Investigation_State;
(function (Investigation_State) {
    /**
     * @generated from protobuf enum value: STATE_INVALID = 0;
     */
    Investigation_State[Investigation_State["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: STATE_IN_PROGRESS = 1;
     */
    Investigation_State[Investigation_State["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    /**
     * @generated from protobuf enum value: STATE_COMPLETE = 2;
     */
    Investigation_State[Investigation_State["COMPLETE"] = 2] = "COMPLETE";
    /**
     * @generated from protobuf enum value: STATE_REWARD_TAKEN = 3;
     */
    Investigation_State[Investigation_State["REWARD_TAKEN"] = 3] = "REWARD_TAKEN";
})(Investigation_State = exports.Investigation_State || (exports.Investigation_State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Investigation$Type extends runtime_5.MessageType {
    constructor() {
        super("Investigation", [
            { no: 5, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "state", kind: "enum", T: () => ["Investigation.State", Investigation_State, "STATE_"] }
        ]);
    }
    create(value) {
        const message = { totalProgress: 0, progress: 0, id: 0, state: 0 };
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
                case /* uint32 total_progress */ 5:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 progress */ 14:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 id */ 10:
                    message.id = reader.uint32();
                    break;
                case /* Investigation.State state */ 6:
                    message.state = reader.int32();
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
        /* uint32 total_progress = 5; */
        if (message.totalProgress !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 progress = 14; */
        if (message.progress !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.progress);
        /* uint32 id = 10; */
        if (message.id !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.id);
        /* Investigation.State state = 6; */
        if (message.state !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Investigation
 */
exports.Investigation = new Investigation$Type();
