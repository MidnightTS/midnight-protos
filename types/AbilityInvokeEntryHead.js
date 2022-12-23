"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityInvokeEntryHead = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvokeEntryHead$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityInvokeEntryHead", [
            { no: 8, name: "instanced_ability_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "target_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "server_buff_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "local_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "modifier_config_local_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "is_serverbuff_modifier", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "instanced_modifier_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { instancedAbilityId: 0, targetId: 0, serverBuffUid: 0, localId: 0, modifierConfigLocalId: 0, isServerbuffModifier: false, instancedModifierId: 0 };
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
                case /* uint32 instanced_ability_id */ 8:
                    message.instancedAbilityId = reader.uint32();
                    break;
                case /* uint32 target_id */ 6:
                    message.targetId = reader.uint32();
                    break;
                case /* uint32 server_buff_uid */ 1:
                    message.serverBuffUid = reader.uint32();
                    break;
                case /* int32 local_id */ 12:
                    message.localId = reader.int32();
                    break;
                case /* int32 modifier_config_local_id */ 7:
                    message.modifierConfigLocalId = reader.int32();
                    break;
                case /* bool is_serverbuff_modifier */ 15:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* uint32 instanced_modifier_id */ 10:
                    message.instancedModifierId = reader.uint32();
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
        /* uint32 instanced_ability_id = 8; */
        if (message.instancedAbilityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.instancedAbilityId);
        /* uint32 target_id = 6; */
        if (message.targetId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.targetId);
        /* uint32 server_buff_uid = 1; */
        if (message.serverBuffUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.serverBuffUid);
        /* int32 local_id = 12; */
        if (message.localId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).int32(message.localId);
        /* int32 modifier_config_local_id = 7; */
        if (message.modifierConfigLocalId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.modifierConfigLocalId);
        /* bool is_serverbuff_modifier = 15; */
        if (message.isServerbuffModifier !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isServerbuffModifier);
        /* uint32 instanced_modifier_id = 10; */
        if (message.instancedModifierId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.instancedModifierId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityInvokeEntryHead
 */
exports.AbilityInvokeEntryHead = new AbilityInvokeEntryHead$Type();
