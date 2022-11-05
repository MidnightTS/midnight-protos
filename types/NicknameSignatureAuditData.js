"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NicknameSignatureAuditData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ContentAuditAuxiliaryField_1 = require("./ContentAuditAuxiliaryField");
const ContentAuditField_1 = require("./ContentAuditField");
// @generated message type with reflection information, may provide speed optimized methods
class NicknameSignatureAuditData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.NicknameSignatureAuditData", [
            { no: 1, name: "aid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entity_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "lang", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "queue_key", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "region", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "audit_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditField_1.ContentAuditField },
            { no: 8, name: "aux_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditAuxiliaryField_1.ContentAuditAuxiliaryField }
        ]);
    }
    create(value) {
        const message = { auditFieldList: [], auxFieldList: [] };
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
                case /* optional string aid */ 1:
                    message.aid = reader.string();
                    break;
                case /* optional string entity_id */ 2:
                    message.entityId = reader.string();
                    break;
                case /* optional string lang */ 3:
                    message.lang = reader.string();
                    break;
                case /* optional string queue_key */ 4:
                    message.queueKey = reader.string();
                    break;
                case /* optional string region */ 5:
                    message.region = reader.string();
                    break;
                case /* optional uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ContentAuditField audit_field_list */ 7:
                    message.auditFieldList.push(ContentAuditField_1.ContentAuditField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated com.midnights.game.ContentAuditAuxiliaryField aux_field_list */ 8:
                    message.auxFieldList.push(ContentAuditAuxiliaryField_1.ContentAuditAuxiliaryField.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional string aid = 1; */
        if (message.aid !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.aid);
        /* optional string entity_id = 2; */
        if (message.entityId !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.entityId);
        /* optional string lang = 3; */
        if (message.lang !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.lang);
        /* optional string queue_key = 4; */
        if (message.queueKey !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.queueKey);
        /* optional string region = 5; */
        if (message.region !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.region);
        /* optional uint32 uid = 6; */
        if (message.uid !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated com.midnights.game.ContentAuditField audit_field_list = 7; */
        for (let i = 0; i < message.auditFieldList.length; i++)
            ContentAuditField_1.ContentAuditField.internalBinaryWrite(message.auditFieldList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.ContentAuditAuxiliaryField aux_field_list = 8; */
        for (let i = 0; i < message.auxFieldList.length; i++)
            ContentAuditAuxiliaryField_1.ContentAuditAuxiliaryField.internalBinaryWrite(message.auxFieldList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.NicknameSignatureAuditData
 */
exports.NicknameSignatureAuditData = new NicknameSignatureAuditData$Type();
