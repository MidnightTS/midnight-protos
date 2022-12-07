"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAbilityChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityInvokeEntry_1 = require("./AbilityInvokeEntry");
// @generated message type with reflection information, may provide speed optimized methods
class ClientAbilityChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ClientAbilityChangeNotify", [
            { no: 10, name: "is_init_hash", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "invokes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityInvokeEntry_1.AbilityInvokeEntry },
            { no: 11, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isInitHash: false, invokes: [], entityId: 0 };
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
                case /* bool is_init_hash */ 10:
                    message.isInitHash = reader.bool();
                    break;
                case /* repeated AbilityInvokeEntry invokes */ 14:
                    message.invokes.push(AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 entity_id */ 11:
                    message.entityId = reader.uint32();
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
        /* bool is_init_hash = 10; */
        if (message.isInitHash !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isInitHash);
        /* repeated AbilityInvokeEntry invokes = 14; */
        for (let i = 0; i < message.invokes.length; i++)
            AbilityInvokeEntry_1.AbilityInvokeEntry.internalBinaryWrite(message.invokes[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 11; */
        if (message.entityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ClientAbilityChangeNotify
 */
exports.ClientAbilityChangeNotify = new ClientAbilityChangeNotify$Type();
