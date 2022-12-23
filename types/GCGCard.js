"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGCard = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillLimitsInfo_1 = require("./GCGSkillLimitsInfo");
const GCGToken_1 = require("./GCGToken");
// @generated message type with reflection information, may provide speed optimized methods
class GCGCard$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGCard", [
            { no: 7, name: "tag_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_show", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "token_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGToken_1.GCGToken },
            { no: 2, name: "face_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "skill_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "skill_limits_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSkillLimitsInfo_1.GCGSkillLimitsInfo },
            { no: 6, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tagList: [], guid: 0, isShow: false, tokenList: [], faceType: 0, skillIdList: [], skillLimitsList: [], id: 0, controllerId: 0 };
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
                case /* repeated uint32 tag_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.tagList.push(reader.uint32());
                    else
                        message.tagList.push(reader.uint32());
                    break;
                case /* uint32 guid */ 11:
                    message.guid = reader.uint32();
                    break;
                case /* bool is_show */ 15:
                    message.isShow = reader.bool();
                    break;
                case /* repeated GCGToken token_list */ 8:
                    message.tokenList.push(GCGToken_1.GCGToken.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 face_type */ 2:
                    message.faceType = reader.uint32();
                    break;
                case /* repeated uint32 skill_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.skillIdList.push(reader.uint32());
                    else
                        message.skillIdList.push(reader.uint32());
                    break;
                case /* repeated GCGSkillLimitsInfo skill_limits_list */ 3:
                    message.skillLimitsList.push(GCGSkillLimitsInfo_1.GCGSkillLimitsInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 id */ 6:
                    message.id = reader.uint32();
                    break;
                case /* uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 tag_list = 7; */
        if (message.tagList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.tagList.length; i++)
                writer.uint32(message.tagList[i]);
            writer.join();
        }
        /* uint32 guid = 11; */
        if (message.guid !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.guid);
        /* bool is_show = 15; */
        if (message.isShow !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isShow);
        /* repeated GCGToken token_list = 8; */
        for (let i = 0; i < message.tokenList.length; i++)
            GCGToken_1.GCGToken.internalBinaryWrite(message.tokenList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 face_type = 2; */
        if (message.faceType !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.faceType);
        /* repeated uint32 skill_id_list = 13; */
        if (message.skillIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.skillIdList.length; i++)
                writer.uint32(message.skillIdList[i]);
            writer.join();
        }
        /* repeated GCGSkillLimitsInfo skill_limits_list = 3; */
        for (let i = 0; i < message.skillLimitsList.length; i++)
            GCGSkillLimitsInfo_1.GCGSkillLimitsInfo.internalBinaryWrite(message.skillLimitsList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 id = 6; */
        if (message.id !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.id);
        /* uint32 controller_id = 5; */
        if (message.controllerId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGCard
 */
exports.GCGCard = new GCGCard$Type();
