"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassiveEntityElementOpBatchNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ShapeBox_1 = require("./ShapeBox");
const ShapeSphere_1 = require("./ShapeSphere");
// @generated message type with reflection information, may provide speed optimized methods
class MassiveEntityElementOpBatchNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MassiveEntityElementOpBatchNotify", [
            { no: 8, name: "attacker_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "attack_element_durability", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 2, name: "Unk3300_PNANGDNNFCH", kind: "scalar", jsonName: "Unk3300PNANGDNNFCH", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "entity_type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "Unk3300_KNLDJPEMCKP", kind: "scalar", jsonName: "Unk3300KNLDJPEMCKP", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "op_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "user_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "shape_sphere", kind: "message", oneof: "checkShape", T: () => ShapeSphere_1.ShapeSphere },
            { no: 13, name: "shape_box", kind: "message", oneof: "checkShape", T: () => ShapeBox_1.ShapeBox }
        ]);
    }
    create(value) {
        const message = { attackerId: 0, attackElementDurability: 0, unk3300PNANGDNNFCH: 0, entityType: 0, unk3300KNLDJPEMCKP: 0, opIdx: 0, userId: 0, checkShape: { oneofKind: undefined } };
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
                case /* uint32 attacker_id */ 8:
                    message.attackerId = reader.uint32();
                    break;
                case /* float attack_element_durability */ 4:
                    message.attackElementDurability = reader.float();
                    break;
                case /* int32 Unk3300_PNANGDNNFCH = 2 [json_name = "Unk3300PNANGDNNFCH"];*/ 2:
                    message.unk3300PNANGDNNFCH = reader.int32();
                    break;
                case /* int32 entity_type */ 10:
                    message.entityType = reader.int32();
                    break;
                case /* int32 Unk3300_KNLDJPEMCKP = 7 [json_name = "Unk3300KNLDJPEMCKP"];*/ 7:
                    message.unk3300KNLDJPEMCKP = reader.int32();
                    break;
                case /* uint32 op_idx */ 11:
                    message.opIdx = reader.uint32();
                    break;
                case /* uint32 user_id */ 1:
                    message.userId = reader.uint32();
                    break;
                case /* ShapeSphere shape_sphere */ 14:
                    message.checkShape = {
                        oneofKind: "shapeSphere",
                        shapeSphere: ShapeSphere_1.ShapeSphere.internalBinaryRead(reader, reader.uint32(), options, message.checkShape.shapeSphere)
                    };
                    break;
                case /* ShapeBox shape_box */ 13:
                    message.checkShape = {
                        oneofKind: "shapeBox",
                        shapeBox: ShapeBox_1.ShapeBox.internalBinaryRead(reader, reader.uint32(), options, message.checkShape.shapeBox)
                    };
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
        /* uint32 attacker_id = 8; */
        if (message.attackerId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.attackerId);
        /* float attack_element_durability = 4; */
        if (message.attackElementDurability !== 0)
            writer.tag(4, runtime_1.WireType.Bit32).float(message.attackElementDurability);
        /* int32 Unk3300_PNANGDNNFCH = 2 [json_name = "Unk3300PNANGDNNFCH"]; */
        if (message.unk3300PNANGDNNFCH !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.unk3300PNANGDNNFCH);
        /* int32 entity_type = 10; */
        if (message.entityType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.entityType);
        /* int32 Unk3300_KNLDJPEMCKP = 7 [json_name = "Unk3300KNLDJPEMCKP"]; */
        if (message.unk3300KNLDJPEMCKP !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.unk3300KNLDJPEMCKP);
        /* uint32 op_idx = 11; */
        if (message.opIdx !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.opIdx);
        /* uint32 user_id = 1; */
        if (message.userId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.userId);
        /* ShapeSphere shape_sphere = 14; */
        if (message.checkShape.oneofKind === "shapeSphere")
            ShapeSphere_1.ShapeSphere.internalBinaryWrite(message.checkShape.shapeSphere, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ShapeBox shape_box = 13; */
        if (message.checkShape.oneofKind === "shapeBox")
            ShapeBox_1.ShapeBox.internalBinaryWrite(message.checkShape.shapeBox, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassiveEntityElementOpBatchNotify
 */
exports.MassiveEntityElementOpBatchNotify = new MassiveEntityElementOpBatchNotify$Type();
