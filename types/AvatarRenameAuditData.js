"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarRenameAuditData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ContentAuditAuxiliaryField_1 = require("./ContentAuditAuxiliaryField");
const AvatarRenameContentAuditField_1 = require("./AvatarRenameContentAuditField");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarRenameAuditData$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarRenameAuditData", [
            { no: 1, name: "aid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entity_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "lang", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "queue_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "region", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "audit_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AvatarRenameContentAuditField_1.AvatarRenameContentAuditField },
            { no: 8, name: "aux_field_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ContentAuditAuxiliaryField_1.ContentAuditAuxiliaryField }
        ]);
    }
    create(value) {
        const message = { aid: "", entityId: "", lang: "", queueKey: "", region: "", uid: 0, auditFieldList: [], auxFieldList: [] };
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
                case /* string aid */ 1:
                    message.aid = reader.string();
                    break;
                case /* string entity_id */ 2:
                    message.entityId = reader.string();
                    break;
                case /* string lang */ 3:
                    message.lang = reader.string();
                    break;
                case /* string queue_key */ 4:
                    message.queueKey = reader.string();
                    break;
                case /* string region */ 5:
                    message.region = reader.string();
                    break;
                case /* uint32 uid */ 6:
                    message.uid = reader.uint32();
                    break;
                case /* repeated AvatarRenameContentAuditField audit_field_list */ 7:
                    message.auditFieldList.push(AvatarRenameContentAuditField_1.AvatarRenameContentAuditField.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ContentAuditAuxiliaryField aux_field_list */ 8:
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
        /* string aid = 1; */
        if (message.aid !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.aid);
        /* string entity_id = 2; */
        if (message.entityId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.entityId);
        /* string lang = 3; */
        if (message.lang !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.lang);
        /* string queue_key = 4; */
        if (message.queueKey !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.queueKey);
        /* string region = 5; */
        if (message.region !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.region);
        /* uint32 uid = 6; */
        if (message.uid !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.uid);
        /* repeated AvatarRenameContentAuditField audit_field_list = 7; */
        for (let i = 0; i < message.auditFieldList.length; i++)
            AvatarRenameContentAuditField_1.AvatarRenameContentAuditField.internalBinaryWrite(message.auditFieldList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ContentAuditAuxiliaryField aux_field_list = 8; */
        for (let i = 0; i < message.auxFieldList.length; i++)
            ContentAuditAuxiliaryField_1.ContentAuditAuxiliaryField.internalBinaryWrite(message.auxFieldList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarRenameAuditData
 */
exports.AvatarRenameAuditData = new AvatarRenameAuditData$Type();
