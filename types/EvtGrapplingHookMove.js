"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtGrapplingHookMove = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtGrapplingHookMove$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtGrapplingHookMove", [
            { no: 4, name: "target_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "speed", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "Unk3300_NDMHKNFMPCJ", kind: "scalar", jsonName: "Unk3300NDMHKNFMPCJ", T: 2 /*ScalarType.FLOAT*/ },
            { no: 11, name: "animator_state_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_BGOLPLHGGPO", kind: "scalar", jsonName: "Unk3300BGOLPLHGGPO", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_MJAOALPCJML", kind: "scalar", jsonName: "Unk3300MJAOALPCJML", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "Unk3300_BKEELCGOLLN", kind: "scalar", jsonName: "Unk3300BKEELCGOLLN", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "override_collider", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0, speed: 0, unk3300NDMHKNFMPCJ: 0, animatorStateIdList: [], unk3300BGOLPLHGGPO: false, unk3300MJAOALPCJML: 0, unk3300BKEELCGOLLN: false, overrideCollider: "" };
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
                case /* Vector target_pos */ 4:
                    message.targetPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* float speed */ 2:
                    message.speed = reader.float();
                    break;
                case /* float Unk3300_NDMHKNFMPCJ = 5 [json_name = "Unk3300NDMHKNFMPCJ"];*/ 5:
                    message.unk3300NDMHKNFMPCJ = reader.float();
                    break;
                case /* repeated uint32 animator_state_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.animatorStateIdList.push(reader.uint32());
                    else
                        message.animatorStateIdList.push(reader.uint32());
                    break;
                case /* bool Unk3300_BGOLPLHGGPO = 1 [json_name = "Unk3300BGOLPLHGGPO"];*/ 1:
                    message.unk3300BGOLPLHGGPO = reader.bool();
                    break;
                case /* float Unk3300_MJAOALPCJML = 9 [json_name = "Unk3300MJAOALPCJML"];*/ 9:
                    message.unk3300MJAOALPCJML = reader.float();
                    break;
                case /* bool Unk3300_BKEELCGOLLN = 15 [json_name = "Unk3300BKEELCGOLLN"];*/ 15:
                    message.unk3300BKEELCGOLLN = reader.bool();
                    break;
                case /* string override_collider */ 3:
                    message.overrideCollider = reader.string();
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
        /* Vector target_pos = 4; */
        if (message.targetPos)
            Vector_1.Vector.internalBinaryWrite(message.targetPos, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.entityId);
        /* float speed = 2; */
        if (message.speed !== 0)
            writer.tag(2, runtime_2.WireType.Bit32).float(message.speed);
        /* float Unk3300_NDMHKNFMPCJ = 5 [json_name = "Unk3300NDMHKNFMPCJ"]; */
        if (message.unk3300NDMHKNFMPCJ !== 0)
            writer.tag(5, runtime_2.WireType.Bit32).float(message.unk3300NDMHKNFMPCJ);
        /* repeated uint32 animator_state_id_list = 11; */
        if (message.animatorStateIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.animatorStateIdList.length; i++)
                writer.uint32(message.animatorStateIdList[i]);
            writer.join();
        }
        /* bool Unk3300_BGOLPLHGGPO = 1 [json_name = "Unk3300BGOLPLHGGPO"]; */
        if (message.unk3300BGOLPLHGGPO !== false)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.unk3300BGOLPLHGGPO);
        /* float Unk3300_MJAOALPCJML = 9 [json_name = "Unk3300MJAOALPCJML"]; */
        if (message.unk3300MJAOALPCJML !== 0)
            writer.tag(9, runtime_2.WireType.Bit32).float(message.unk3300MJAOALPCJML);
        /* bool Unk3300_BKEELCGOLLN = 15 [json_name = "Unk3300BKEELCGOLLN"]; */
        if (message.unk3300BKEELCGOLLN !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.unk3300BKEELCGOLLN);
        /* string override_collider = 3; */
        if (message.overrideCollider !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.overrideCollider);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtGrapplingHookMove
 */
exports.EvtGrapplingHookMove = new EvtGrapplingHookMove$Type();
