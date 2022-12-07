"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAbilityCreatedMovingPlatformNotify = exports.UpdateAbilityCreatedMovingPlatformNotify_OpType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum UpdateAbilityCreatedMovingPlatformNotify.OpType
 */
var UpdateAbilityCreatedMovingPlatformNotify_OpType;
(function (UpdateAbilityCreatedMovingPlatformNotify_OpType) {
    /**
     * @generated from protobuf enum value: OP_TYPE_NONE = 0;
     */
    UpdateAbilityCreatedMovingPlatformNotify_OpType[UpdateAbilityCreatedMovingPlatformNotify_OpType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: OP_TYPE_ACTIVATE = 1;
     */
    UpdateAbilityCreatedMovingPlatformNotify_OpType[UpdateAbilityCreatedMovingPlatformNotify_OpType["ACTIVATE"] = 1] = "ACTIVATE";
    /**
     * @generated from protobuf enum value: OP_TYPE_DEACTIVATE = 2;
     */
    UpdateAbilityCreatedMovingPlatformNotify_OpType[UpdateAbilityCreatedMovingPlatformNotify_OpType["DEACTIVATE"] = 2] = "DEACTIVATE";
})(UpdateAbilityCreatedMovingPlatformNotify_OpType = exports.UpdateAbilityCreatedMovingPlatformNotify_OpType || (exports.UpdateAbilityCreatedMovingPlatformNotify_OpType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class UpdateAbilityCreatedMovingPlatformNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("UpdateAbilityCreatedMovingPlatformNotify", [
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "op_type", kind: "enum", T: () => ["UpdateAbilityCreatedMovingPlatformNotify.OpType", UpdateAbilityCreatedMovingPlatformNotify_OpType, "OP_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { entityId: 0, opType: 0 };
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
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* UpdateAbilityCreatedMovingPlatformNotify.OpType op_type */ 15:
                    message.opType = reader.int32();
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
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* UpdateAbilityCreatedMovingPlatformNotify.OpType op_type = 15; */
        if (message.opType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdateAbilityCreatedMovingPlatformNotify
 */
exports.UpdateAbilityCreatedMovingPlatformNotify = new UpdateAbilityCreatedMovingPlatformNotify$Type();
