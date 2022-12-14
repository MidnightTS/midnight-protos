"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMarkPoint = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MapMarkFromType_1 = require("./MapMarkFromType");
const MapMarkPointType_1 = require("./MapMarkPointType");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class MapMarkPoint$Type extends runtime_5.MessageType {
    constructor() {
        super("MapMarkPoint", [
            { no: 1, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "point_type", kind: "enum", T: () => ["MapMarkPointType", MapMarkPointType_1.MapMarkPointType, "MAP_MARK_POINT_TYPE_"] },
            { no: 5, name: "monster_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "from_type", kind: "enum", T: () => ["MapMarkFromType", MapMarkFromType_1.MapMarkFromType, "MAP_MARK_FROM_TYPE_"] },
            { no: 7, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, name: "", pointType: 0, monsterId: 0, fromType: 0, questId: 0 };
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
                case /* uint32 scene_id */ 1:
                    message.sceneId = reader.uint32();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* Vector pos */ 3:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* MapMarkPointType point_type */ 4:
                    message.pointType = reader.int32();
                    break;
                case /* uint32 monster_id */ 5:
                    message.monsterId = reader.uint32();
                    break;
                case /* MapMarkFromType from_type */ 6:
                    message.fromType = reader.int32();
                    break;
                case /* uint32 quest_id */ 7:
                    message.questId = reader.uint32();
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
        /* uint32 scene_id = 1; */
        if (message.sceneId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.name);
        /* Vector pos = 3; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MapMarkPointType point_type = 4; */
        if (message.pointType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.pointType);
        /* uint32 monster_id = 5; */
        if (message.monsterId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.monsterId);
        /* MapMarkFromType from_type = 6; */
        if (message.fromType !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.fromType);
        /* uint32 quest_id = 7; */
        if (message.questId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MapMarkPoint
 */
exports.MapMarkPoint = new MapMarkPoint$Type();
