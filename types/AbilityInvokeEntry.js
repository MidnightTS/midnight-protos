"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityInvokeEntry = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityInvokeArgument_1 = require("./AbilityInvokeArgument");
const AbilityInvokeEntryHead_1 = require("./AbilityInvokeEntryHead");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityInvokeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityInvokeEntry", [
            { no: 9, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 13, name: "event_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "forward_peer", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "total_tick_time", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "head", kind: "message", T: () => AbilityInvokeEntryHead_1.AbilityInvokeEntryHead },
            { no: 2, name: "ability_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 8, name: "argument_type", kind: "enum", T: () => ["AbilityInvokeArgument", AbilityInvokeArgument_1.AbilityInvokeArgument, "ABILITY_INVOKE_ARGUMENT_"] },
            { no: 12, name: "is_ignore_auth", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, eventId: 0, entityId: 0, forwardPeer: 0, totalTickTime: 0, abilityData: new Uint8Array(0), argumentType: 0, isIgnoreAuth: false };
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
                case /* ForwardType forward_type */ 9:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 event_id */ 13:
                    message.eventId = reader.uint32();
                    break;
                case /* uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 forward_peer */ 14:
                    message.forwardPeer = reader.uint32();
                    break;
                case /* double total_tick_time */ 10:
                    message.totalTickTime = reader.double();
                    break;
                case /* AbilityInvokeEntryHead head */ 3:
                    message.head = AbilityInvokeEntryHead_1.AbilityInvokeEntryHead.internalBinaryRead(reader, reader.uint32(), options, message.head);
                    break;
                case /* bytes ability_data */ 2:
                    message.abilityData = reader.bytes();
                    break;
                case /* AbilityInvokeArgument argument_type */ 8:
                    message.argumentType = reader.int32();
                    break;
                case /* bool is_ignore_auth */ 12:
                    message.isIgnoreAuth = reader.bool();
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
        /* ForwardType forward_type = 9; */
        if (message.forwardType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 event_id = 13; */
        if (message.eventId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.eventId);
        /* uint32 entity_id = 7; */
        if (message.entityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 forward_peer = 14; */
        if (message.forwardPeer !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.forwardPeer);
        /* double total_tick_time = 10; */
        if (message.totalTickTime !== 0)
            writer.tag(10, runtime_1.WireType.Bit64).double(message.totalTickTime);
        /* AbilityInvokeEntryHead head = 3; */
        if (message.head)
            AbilityInvokeEntryHead_1.AbilityInvokeEntryHead.internalBinaryWrite(message.head, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes ability_data = 2; */
        if (message.abilityData.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.abilityData);
        /* AbilityInvokeArgument argument_type = 8; */
        if (message.argumentType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.argumentType);
        /* bool is_ignore_auth = 12; */
        if (message.isIgnoreAuth !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isIgnoreAuth);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityInvokeEntry
 */
exports.AbilityInvokeEntry = new AbilityInvokeEntry$Type();
