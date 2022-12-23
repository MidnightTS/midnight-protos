"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestigationTarget = exports.InvestigationTarget_State = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum InvestigationTarget.State
 */
var InvestigationTarget_State;
(function (InvestigationTarget_State) {
    /**
     * @generated from protobuf enum value: STATE_INVALID = 0;
     */
    InvestigationTarget_State[InvestigationTarget_State["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: STATE_IN_PROGRESS = 1;
     */
    InvestigationTarget_State[InvestigationTarget_State["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    /**
     * @generated from protobuf enum value: STATE_COMPLETE = 2;
     */
    InvestigationTarget_State[InvestigationTarget_State["COMPLETE"] = 2] = "COMPLETE";
    /**
     * @generated from protobuf enum value: STATE_REWARD_TAKEN = 3;
     */
    InvestigationTarget_State[InvestigationTarget_State["REWARD_TAKEN"] = 3] = "REWARD_TAKEN";
})(InvestigationTarget_State = exports.InvestigationTarget_State || (exports.InvestigationTarget_State = {}));
// @generated message type with reflection information, may provide speed optimized methods
class InvestigationTarget$Type extends runtime_5.MessageType {
    constructor() {
        super("InvestigationTarget", [
            { no: 8, name: "investigation_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "state", kind: "enum", T: () => ["InvestigationTarget.State", InvestigationTarget_State, "STATE_"] },
            { no: 5, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { investigationId: 0, questId: 0, state: 0, totalProgress: 0, progress: 0 };
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
                case /* uint32 investigation_id */ 8:
                    message.investigationId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 6:
                    message.questId = reader.uint32();
                    break;
                case /* InvestigationTarget.State state */ 2:
                    message.state = reader.int32();
                    break;
                case /* uint32 total_progress */ 5:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 progress */ 15:
                    message.progress = reader.uint32();
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
        /* uint32 investigation_id = 8; */
        if (message.investigationId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.investigationId);
        /* uint32 quest_id = 6; */
        if (message.questId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.questId);
        /* InvestigationTarget.State state = 2; */
        if (message.state !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.state);
        /* uint32 total_progress = 5; */
        if (message.totalProgress !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 progress = 15; */
        if (message.progress !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InvestigationTarget
 */
exports.InvestigationTarget = new InvestigationTarget$Type();
