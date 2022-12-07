"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityConfigHashNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EntityConfigHashEntry_1 = require("./EntityConfigHashEntry");
// @generated message type with reflection information, may provide speed optimized methods
class EntityConfigHashNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityConfigHashNotify", [
            { no: 1, name: "Unk3300_NAMDIKJILAI", kind: "message", jsonName: "Unk3300NAMDIKJILAI", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityConfigHashEntry_1.EntityConfigHashEntry },
            { no: 2, name: "Unk3300_BLBEKMDGCMB", kind: "message", jsonName: "Unk3300BLBEKMDGCMB", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityConfigHashEntry_1.EntityConfigHashEntry },
            { no: 9, name: "Unk3300_NLMPHBGMOEN", kind: "message", jsonName: "Unk3300NLMPHBGMOEN", repeat: 1 /*RepeatType.PACKED*/, T: () => EntityConfigHashEntry_1.EntityConfigHashEntry }
        ]);
    }
    create(value) {
        const message = { unk3300NAMDIKJILAI: [], unk3300BLBEKMDGCMB: [], unk3300NLMPHBGMOEN: [] };
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
                case /* repeated EntityConfigHashEntry Unk3300_NAMDIKJILAI = 1 [json_name = "Unk3300NAMDIKJILAI"];*/ 1:
                    message.unk3300NAMDIKJILAI.push(EntityConfigHashEntry_1.EntityConfigHashEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated EntityConfigHashEntry Unk3300_BLBEKMDGCMB = 2 [json_name = "Unk3300BLBEKMDGCMB"];*/ 2:
                    message.unk3300BLBEKMDGCMB.push(EntityConfigHashEntry_1.EntityConfigHashEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated EntityConfigHashEntry Unk3300_NLMPHBGMOEN = 9 [json_name = "Unk3300NLMPHBGMOEN"];*/ 9:
                    message.unk3300NLMPHBGMOEN.push(EntityConfigHashEntry_1.EntityConfigHashEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated EntityConfigHashEntry Unk3300_NAMDIKJILAI = 1 [json_name = "Unk3300NAMDIKJILAI"]; */
        for (let i = 0; i < message.unk3300NAMDIKJILAI.length; i++)
            EntityConfigHashEntry_1.EntityConfigHashEntry.internalBinaryWrite(message.unk3300NAMDIKJILAI[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated EntityConfigHashEntry Unk3300_BLBEKMDGCMB = 2 [json_name = "Unk3300BLBEKMDGCMB"]; */
        for (let i = 0; i < message.unk3300BLBEKMDGCMB.length; i++)
            EntityConfigHashEntry_1.EntityConfigHashEntry.internalBinaryWrite(message.unk3300BLBEKMDGCMB[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated EntityConfigHashEntry Unk3300_NLMPHBGMOEN = 9 [json_name = "Unk3300NLMPHBGMOEN"]; */
        for (let i = 0; i < message.unk3300NLMPHBGMOEN.length; i++)
            EntityConfigHashEntry_1.EntityConfigHashEntry.internalBinaryWrite(message.unk3300NLMPHBGMOEN[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityConfigHashNotify
 */
exports.EntityConfigHashNotify = new EntityConfigHashNotify$Type();
