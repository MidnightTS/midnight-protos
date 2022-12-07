"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillLimitsInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGLimitsInfo_1 = require("./GCGLimitsInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillLimitsInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillLimitsInfo", [
            { no: 1, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "limits_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGLimitsInfo_1.GCGLimitsInfo }
        ]);
    }
    create(value) {
        const message = { skillId: 0, limitsList: [] };
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
                case /* uint32 skill_id */ 1:
                    message.skillId = reader.uint32();
                    break;
                case /* repeated GCGLimitsInfo limits_list */ 7:
                    message.limitsList.push(GCGLimitsInfo_1.GCGLimitsInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 skill_id = 1; */
        if (message.skillId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.skillId);
        /* repeated GCGLimitsInfo limits_list = 7; */
        for (let i = 0; i < message.limitsList.length; i++)
            GCGLimitsInfo_1.GCGLimitsInfo.internalBinaryWrite(message.limitsList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillLimitsInfo
 */
exports.GCGSkillLimitsInfo = new GCGSkillLimitsInfo$Type();
