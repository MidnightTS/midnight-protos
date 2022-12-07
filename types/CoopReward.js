"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoopReward = exports.CoopReward_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum CoopReward.State
 */
var CoopReward_State;
(function (CoopReward_State) {
    /**
     * @generated from protobuf enum value: STATE_UNLOCK = 0;
     */
    CoopReward_State[CoopReward_State["UNLOCK"] = 0] = "UNLOCK";
    /**
     * @generated from protobuf enum value: STATE_LOCK = 1;
     */
    CoopReward_State[CoopReward_State["LOCK"] = 1] = "LOCK";
    /**
     * @generated from protobuf enum value: STATE_TAKEN = 2;
     */
    CoopReward_State[CoopReward_State["TAKEN"] = 2] = "TAKEN";
})(CoopReward_State = exports.CoopReward_State || (exports.CoopReward_State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CoopReward$Type extends runtime_5.MessageType {
    constructor() {
        super("CoopReward", [
            { no: 5, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "state", kind: "enum", T: () => ["CoopReward.State", CoopReward_State, "STATE_"] }
        ]);
    }
    create(value) {
        const message = { id: 0, state: 0 };
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
                case /* uint32 id */ 5:
                    message.id = reader.uint32();
                    break;
                case /* CoopReward.State state */ 6:
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
        /* uint32 id = 5; */
        if (message.id !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.id);
        /* CoopReward.State state = 6; */
        if (message.state !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.state);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CoopReward
 */
exports.CoopReward = new CoopReward$Type();
