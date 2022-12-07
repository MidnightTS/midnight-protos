"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiSyncInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AiSyncInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AiSyncInfo", [
            { no: 2, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_NOIPAMJJIDL", kind: "scalar", jsonName: "Unk3300NOIPAMJJIDL", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "Unk3300_EBICCLLGICG", kind: "scalar", jsonName: "Unk3300EBICCLLGICG", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0, unk3300NOIPAMJJIDL: false, unk3300EBICCLLGICG: false };
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
                case /* uint32 entity_id */ 2:
                    message.entityId = reader.uint32();
                    break;
                case /* bool Unk3300_NOIPAMJJIDL = 4 [json_name = "Unk3300NOIPAMJJIDL"];*/ 4:
                    message.unk3300NOIPAMJJIDL = reader.bool();
                    break;
                case /* bool Unk3300_EBICCLLGICG = 14 [json_name = "Unk3300EBICCLLGICG"];*/ 14:
                    message.unk3300EBICCLLGICG = reader.bool();
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
        /* uint32 entity_id = 2; */
        if (message.entityId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entityId);
        /* bool Unk3300_NOIPAMJJIDL = 4 [json_name = "Unk3300NOIPAMJJIDL"]; */
        if (message.unk3300NOIPAMJJIDL !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.unk3300NOIPAMJJIDL);
        /* bool Unk3300_EBICCLLGICG = 14 [json_name = "Unk3300EBICCLLGICG"]; */
        if (message.unk3300EBICCLLGICG !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.unk3300EBICCLLGICG);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AiSyncInfo
 */
exports.AiSyncInfo = new AiSyncInfo$Type();
