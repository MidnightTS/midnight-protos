"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginCameraSceneLookWithTemplateNotify = exports.BeginCameraSceneLookWithTemplateNotify_FollowType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum BeginCameraSceneLookWithTemplateNotify.FollowType
 */
var BeginCameraSceneLookWithTemplateNotify_FollowType;
(function (BeginCameraSceneLookWithTemplateNotify_FollowType) {
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_INIT_FOLLOW_POS = 0;
     */
    BeginCameraSceneLookWithTemplateNotify_FollowType[BeginCameraSceneLookWithTemplateNotify_FollowType["INIT_FOLLOW_POS"] = 0] = "INIT_FOLLOW_POS";
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_SET_FOLLOW_POS = 1;
     */
    BeginCameraSceneLookWithTemplateNotify_FollowType[BeginCameraSceneLookWithTemplateNotify_FollowType["SET_FOLLOW_POS"] = 1] = "SET_FOLLOW_POS";
    /**
     * @generated from protobuf enum value: FOLLOW_TYPE_SET_ABS_FOLLOW_POS = 2;
     */
    BeginCameraSceneLookWithTemplateNotify_FollowType[BeginCameraSceneLookWithTemplateNotify_FollowType["SET_ABS_FOLLOW_POS"] = 2] = "SET_ABS_FOLLOW_POS";
})(BeginCameraSceneLookWithTemplateNotify_FollowType = exports.BeginCameraSceneLookWithTemplateNotify_FollowType || (exports.BeginCameraSceneLookWithTemplateNotify_FollowType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BeginCameraSceneLookWithTemplateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BeginCameraSceneLookWithTemplateNotify", [
            { no: 5, name: "follow_type", kind: "enum", T: () => ["BeginCameraSceneLookWithTemplateNotify.FollowType", BeginCameraSceneLookWithTemplateNotify_FollowType, "FOLLOW_TYPE_"] },
            { no: 7, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_FJDFGLNLMBN", kind: "message", jsonName: "Unk3300FJDFGLNLMBN", T: () => Vector_1.Vector },
            { no: 13, name: "template_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "other_params", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "Unk3300_PPCIDICMIEN", kind: "message", jsonName: "Unk3300PPCIDICMIEN", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { followType: 0, entityId: 0, templateId: 0, otherParams: [] };
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
                case /* BeginCameraSceneLookWithTemplateNotify.FollowType follow_type */ 5:
                    message.followType = reader.int32();
                    break;
                case /* uint32 entity_id */ 7:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector Unk3300_FJDFGLNLMBN = 1 [json_name = "Unk3300FJDFGLNLMBN"];*/ 1:
                    message.unk3300FJDFGLNLMBN = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300FJDFGLNLMBN);
                    break;
                case /* uint32 template_id */ 13:
                    message.templateId = reader.uint32();
                    break;
                case /* repeated string other_params */ 12:
                    message.otherParams.push(reader.string());
                    break;
                case /* Vector Unk3300_PPCIDICMIEN = 10 [json_name = "Unk3300PPCIDICMIEN"];*/ 10:
                    message.unk3300PPCIDICMIEN = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300PPCIDICMIEN);
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
        /* BeginCameraSceneLookWithTemplateNotify.FollowType follow_type = 5; */
        if (message.followType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.followType);
        /* uint32 entity_id = 7; */
        if (message.entityId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector Unk3300_FJDFGLNLMBN = 1 [json_name = "Unk3300FJDFGLNLMBN"]; */
        if (message.unk3300FJDFGLNLMBN)
            Vector_1.Vector.internalBinaryWrite(message.unk3300FJDFGLNLMBN, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 template_id = 13; */
        if (message.templateId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.templateId);
        /* repeated string other_params = 12; */
        for (let i = 0; i < message.otherParams.length; i++)
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.otherParams[i]);
        /* Vector Unk3300_PPCIDICMIEN = 10 [json_name = "Unk3300PPCIDICMIEN"]; */
        if (message.unk3300PPCIDICMIEN)
            Vector_1.Vector.internalBinaryWrite(message.unk3300PPCIDICMIEN, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BeginCameraSceneLookWithTemplateNotify
 */
exports.BeginCameraSceneLookWithTemplateNotify = new BeginCameraSceneLookWithTemplateNotify$Type();
