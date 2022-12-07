"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEntityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CreateGadgetInfo_1 = require("./CreateGadgetInfo");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class CreateEntityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CreateEntityInfo", [
            { no: 5, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "room_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "client_unique_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "npc_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "item_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "gadget", kind: "message", oneof: "entityCreateInfo", T: () => CreateGadgetInfo_1.CreateGadgetInfo }
        ]);
    }
    create(value) {
        const message = { level: 0, sceneId: 0, roomId: 0, clientUniqueId: 0, entity: { oneofKind: undefined }, entityCreateInfo: { oneofKind: undefined } };
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
                case /* uint32 level */ 5:
                    message.level = reader.uint32();
                    break;
                case /* Vector pos */ 6:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* Vector rot */ 7:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 room_id */ 11:
                    message.roomId = reader.uint32();
                    break;
                case /* uint32 client_unique_id */ 12:
                    message.clientUniqueId = reader.uint32();
                    break;
                case /* uint32 monster_id */ 1:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 npc_id */ 2:
                    message.entity = {
                        oneofKind: "npcId",
                        npcId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 3:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
                    break;
                case /* uint32 item_id */ 4:
                    message.entity = {
                        oneofKind: "itemId",
                        itemId: reader.uint32()
                    };
                    break;
                case /* CreateGadgetInfo gadget */ 13:
                    message.entityCreateInfo = {
                        oneofKind: "gadget",
                        gadget: CreateGadgetInfo_1.CreateGadgetInfo.internalBinaryRead(reader, reader.uint32(), options, message.entityCreateInfo.gadget)
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
        /* uint32 level = 5; */
        if (message.level !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.level);
        /* Vector pos = 6; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector rot = 7; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 scene_id = 10; */
        if (message.sceneId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 room_id = 11; */
        if (message.roomId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.roomId);
        /* uint32 client_unique_id = 12; */
        if (message.clientUniqueId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.clientUniqueId);
        /* uint32 monster_id = 1; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 npc_id = 2; */
        if (message.entity.oneofKind === "npcId")
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.entity.npcId);
        /* uint32 gadget_id = 3; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.entity.gadgetId);
        /* uint32 item_id = 4; */
        if (message.entity.oneofKind === "itemId")
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entity.itemId);
        /* CreateGadgetInfo gadget = 13; */
        if (message.entityCreateInfo.oneofKind === "gadget")
            CreateGadgetInfo_1.CreateGadgetInfo.internalBinaryWrite(message.entityCreateInfo.gadget, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CreateEntityInfo
 */
exports.CreateEntityInfo = new CreateEntityInfo$Type();
