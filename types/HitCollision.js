"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitCollision = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const HitColliderType_1 = require("./HitColliderType");
// @generated message type with reflection information, may provide speed optimized methods
class HitCollision$Type extends runtime_5.MessageType {
    constructor() {
        super("HitCollision", [
            { no: 8, name: "hit_box_index", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "hit_collider_type", kind: "enum", T: () => ["HitColliderType", HitColliderType_1.HitColliderType, "HIT_COLLIDER_TYPE_"] },
            { no: 7, name: "Unk3300_LNHIOLFMGCN", kind: "scalar", jsonName: "Unk3300LNHIOLFMGCN", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "hit_dir", kind: "message", T: () => Vector_1.Vector },
            { no: 14, name: "hit_point", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "Unk3300_OJHBMLIAPJN", kind: "scalar", jsonName: "Unk3300OJHBMLIAPJN", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { hitBoxIndex: 0, hitColliderType: 0, unk3300LNHIOLFMGCN: 0, unk3300OJHBMLIAPJN: 0 };
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
                case /* int32 hit_box_index */ 8:
                    message.hitBoxIndex = reader.int32();
                    break;
                case /* HitColliderType hit_collider_type */ 5:
                    message.hitColliderType = reader.int32();
                    break;
                case /* float Unk3300_LNHIOLFMGCN = 7 [json_name = "Unk3300LNHIOLFMGCN"];*/ 7:
                    message.unk3300LNHIOLFMGCN = reader.float();
                    break;
                case /* Vector hit_dir */ 3:
                    message.hitDir = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitDir);
                    break;
                case /* Vector hit_point */ 14:
                    message.hitPoint = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.hitPoint);
                    break;
                case /* float Unk3300_OJHBMLIAPJN = 10 [json_name = "Unk3300OJHBMLIAPJN"];*/ 10:
                    message.unk3300OJHBMLIAPJN = reader.float();
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
        /* int32 hit_box_index = 8; */
        if (message.hitBoxIndex !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.hitBoxIndex);
        /* HitColliderType hit_collider_type = 5; */
        if (message.hitColliderType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.hitColliderType);
        /* float Unk3300_LNHIOLFMGCN = 7 [json_name = "Unk3300LNHIOLFMGCN"]; */
        if (message.unk3300LNHIOLFMGCN !== 0)
            writer.tag(7, runtime_1.WireType.Bit32).float(message.unk3300LNHIOLFMGCN);
        /* Vector hit_dir = 3; */
        if (message.hitDir)
            Vector_1.Vector.internalBinaryWrite(message.hitDir, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector hit_point = 14; */
        if (message.hitPoint)
            Vector_1.Vector.internalBinaryWrite(message.hitPoint, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float Unk3300_OJHBMLIAPJN = 10 [json_name = "Unk3300OJHBMLIAPJN"]; */
        if (message.unk3300OJHBMLIAPJN !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.unk3300OJHBMLIAPJN);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HitCollision
 */
exports.HitCollision = new HitCollision$Type();
