"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpActivityTagBriefInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityTagBriefInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("OpActivityTagBriefInfo", [
            { no: 14, name: "has_reward", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "op_activity_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { hasReward: false, opActivityType: 0, configId: 0 };
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
                case /* bool has_reward */ 14:
                    message.hasReward = reader.bool();
                    break;
                case /* uint32 op_activity_type */ 2:
                    message.opActivityType = reader.uint32();
                    break;
                case /* uint32 config_id */ 13:
                    message.configId = reader.uint32();
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
        /* bool has_reward = 14; */
        if (message.hasReward !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.hasReward);
        /* uint32 op_activity_type = 2; */
        if (message.opActivityType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.opActivityType);
        /* uint32 config_id = 13; */
        if (message.configId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OpActivityTagBriefInfo
 */
exports.OpActivityTagBriefInfo = new OpActivityTagBriefInfo$Type();
