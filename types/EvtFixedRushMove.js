"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtFixedRushMove = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtFixedRushMove$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtFixedRushMove", [
            { no: 13, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "override_collider", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "target_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "Unk3300_BGOLPLHGGPO", kind: "scalar", jsonName: "Unk3300BGOLPLHGGPO", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "animator_state_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_BKEELCGOLLN", kind: "scalar", jsonName: "Unk3300BKEELCGOLLN", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "speed", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0, overrideCollider: "", unk3300BGOLPLHGGPO: false, animatorStateIdList: [], unk3300BKEELCGOLLN: false, speed: 0 };
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
                case /* uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* string override_collider */ 7:
                    message.overrideCollider = reader.string();
                    break;
                case /* Vector target_pos */ 14:
                    message.targetPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* bool Unk3300_BGOLPLHGGPO = 8 [json_name = "Unk3300BGOLPLHGGPO"];*/ 8:
                    message.unk3300BGOLPLHGGPO = reader.bool();
                    break;
                case /* repeated uint32 animator_state_id_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.animatorStateIdList.push(reader.uint32());
                    else
                        message.animatorStateIdList.push(reader.uint32());
                    break;
                case /* bool Unk3300_BKEELCGOLLN = 12 [json_name = "Unk3300BKEELCGOLLN"];*/ 12:
                    message.unk3300BKEELCGOLLN = reader.bool();
                    break;
                case /* float speed */ 10:
                    message.speed = reader.float();
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
        /* uint32 entity_id = 13; */
        if (message.entityId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.entityId);
        /* string override_collider = 7; */
        if (message.overrideCollider !== "")
            writer.tag(7, runtime_2.WireType.LengthDelimited).string(message.overrideCollider);
        /* Vector target_pos = 14; */
        if (message.targetPos)
            Vector_1.Vector.internalBinaryWrite(message.targetPos, writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_BGOLPLHGGPO = 8 [json_name = "Unk3300BGOLPLHGGPO"]; */
        if (message.unk3300BGOLPLHGGPO !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.unk3300BGOLPLHGGPO);
        /* repeated uint32 animator_state_id_list = 9; */
        if (message.animatorStateIdList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.animatorStateIdList.length; i++)
                writer.uint32(message.animatorStateIdList[i]);
            writer.join();
        }
        /* bool Unk3300_BKEELCGOLLN = 12 [json_name = "Unk3300BKEELCGOLLN"]; */
        if (message.unk3300BKEELCGOLLN !== false)
            writer.tag(12, runtime_2.WireType.Varint).bool(message.unk3300BKEELCGOLLN);
        /* float speed = 10; */
        if (message.speed !== 0)
            writer.tag(10, runtime_2.WireType.Bit32).float(message.speed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtFixedRushMove
 */
exports.EvtFixedRushMove = new EvtFixedRushMove$Type();
