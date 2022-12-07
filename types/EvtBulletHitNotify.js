"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtBulletHitNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HitColliderType_1 = require("./HitColliderType");
const Vector_1 = require("./Vector");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtBulletHitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtBulletHitNotify", [
            { no: 2, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 4, name: "Unk3300_ELNFDKNGHFP", kind: "scalar", jsonName: "Unk3300ELNFDKNGHFP", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "hit_normal", kind: "message", T: () => Vector_1.Vector },
            { no: 6, name: "Unk3300_KANAJBJHCLG", kind: "scalar", jsonName: "Unk3300KANAJBJHCLG", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "hit_point", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "hit_collider_type", kind: "enum", T: () => ["HitColliderType", HitColliderType_1.HitColliderType, "HIT_COLLIDER_TYPE_"] },
            { no: 14, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "forward_peer", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "hit_box_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, unk3300ELNFDKNGHFP: 0, unk3300KANAJBJHCLG: 0, hitColliderType: 0, entityId: 0, forwardPeer: 0, hitBoxIndex: 0 };
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
                case /* ForwardType forward_type */ 2:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 Unk3300_ELNFDKNGHFP = 4 [json_name = "Unk3300ELNFDKNGHFP"];*/ 4:
                    message.unk3300ELNFDKNGHFP = reader.uint32();
                    break;
                case /* Vector hit_normal */ 9:
                    message.hitNormal = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitNormal);
                    break;
                case /* uint32 Unk3300_KANAJBJHCLG = 6 [json_name = "Unk3300KANAJBJHCLG"];*/ 6:
                    message.unk3300KANAJBJHCLG = reader.uint32();
                    break;
                case /* Vector hit_point */ 8:
                    message.hitPoint = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitPoint);
                    break;
                case /* HitColliderType hit_collider_type */ 10:
                    message.hitColliderType = reader.int32();
                    break;
                case /* uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                case /* uint32 forward_peer */ 3:
                    message.forwardPeer = reader.uint32();
                    break;
                case /* int32 hit_box_index */ 1:
                    message.hitBoxIndex = reader.int32();
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
        /* ForwardType forward_type = 2; */
        if (message.forwardType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 Unk3300_ELNFDKNGHFP = 4 [json_name = "Unk3300ELNFDKNGHFP"]; */
        if (message.unk3300ELNFDKNGHFP !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300ELNFDKNGHFP);
        /* Vector hit_normal = 9; */
        if (message.hitNormal)
            Vector_1.Vector.internalBinaryWrite(message.hitNormal, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_KANAJBJHCLG = 6 [json_name = "Unk3300KANAJBJHCLG"]; */
        if (message.unk3300KANAJBJHCLG !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300KANAJBJHCLG);
        /* Vector hit_point = 8; */
        if (message.hitPoint)
            Vector_1.Vector.internalBinaryWrite(message.hitPoint, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* HitColliderType hit_collider_type = 10; */
        if (message.hitColliderType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.hitColliderType);
        /* uint32 entity_id = 14; */
        if (message.entityId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint32 forward_peer = 3; */
        if (message.forwardPeer !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.forwardPeer);
        /* int32 hit_box_index = 1; */
        if (message.hitBoxIndex !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.hitBoxIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBulletHitNotify
 */
exports.EvtBulletHitNotify = new EvtBulletHitNotify$Type();
