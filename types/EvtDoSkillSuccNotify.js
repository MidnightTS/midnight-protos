"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtDoSkillSuccNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtDoSkillSuccNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtDoSkillSuccNotify", [
            { no: 15, name: "caster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 14, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "forward", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { casterId: 0, forwardType: 0, skillId: 0 };
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
                case /* uint32 caster_id */ 15:
                    message.casterId = reader.uint32();
                    break;
                case /* ForwardType forward_type */ 9:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 skill_id */ 14:
                    message.skillId = reader.uint32();
                    break;
                case /* Vector forward */ 13:
                    message.forward = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
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
        /* uint32 caster_id = 15; */
        if (message.casterId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.casterId);
        /* ForwardType forward_type = 9; */
        if (message.forwardType !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 skill_id = 14; */
        if (message.skillId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.skillId);
        /* Vector forward = 13; */
        if (message.forward)
            Vector_1.Vector.internalBinaryWrite(message.forward, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtDoSkillSuccNotify
 */
exports.EvtDoSkillSuccNotify = new EvtDoSkillSuccNotify$Type();
