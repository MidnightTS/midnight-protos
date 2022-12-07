"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEntityClientDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EntityClientData_1 = require("./EntityClientData");
// @generated message type with reflection information, may provide speed optimized methods
class SetEntityClientDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SetEntityClientDataNotify", [
            { no: 15, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "entity_client_data", kind: "message", T: () => EntityClientData_1.EntityClientData }
        ]);
    }
    create(value) {
        const message = { entityId: 0 };
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
                case /* uint32 entity_id */ 15:
                    message.entityId = reader.uint32();
                    break;
                case /* EntityClientData entity_client_data */ 5:
                    message.entityClientData = EntityClientData_1.EntityClientData.internalBinaryRead(reader, reader.uint32(), options, message.entityClientData);
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
        /* uint32 entity_id = 15; */
        if (message.entityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.entityId);
        /* EntityClientData entity_client_data = 5; */
        if (message.entityClientData)
            EntityClientData_1.EntityClientData.internalBinaryWrite(message.entityClientData, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetEntityClientDataNotify
 */
exports.SetEntityClientDataNotify = new SetEntityClientDataNotify$Type();
