"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGSkillPreviewHpInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGSkillHpChangeType_1 = require("./GCGSkillHpChangeType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGSkillPreviewHpInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGSkillPreviewHpInfo", [
            { no: 8, name: "change_type", kind: "enum", T: () => ["GCGSkillHpChangeType", GCGSkillHpChangeType_1.GCGSkillHpChangeType] },
            { no: 4, name: "hp_change_value", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { changeType: 0, hpChangeValue: 0 };
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
                case /* GCGSkillHpChangeType change_type */ 8:
                    message.changeType = reader.int32();
                    break;
                case /* uint32 hp_change_value */ 4:
                    message.hpChangeValue = reader.uint32();
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
        /* GCGSkillHpChangeType change_type = 8; */
        if (message.changeType !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.changeType);
        /* uint32 hp_change_value = 4; */
        if (message.hpChangeValue !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.hpChangeValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGSkillPreviewHpInfo
 */
exports.GCGSkillPreviewHpInfo = new GCGSkillPreviewHpInfo$Type();
