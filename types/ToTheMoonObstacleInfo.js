"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToTheMoonObstacleInfo = exports.ToTheMoonObstacleInfo_ShapeType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MathQuaternion_1 = require("./MathQuaternion");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum ToTheMoonObstacleInfo.ShapeType
 */
var ToTheMoonObstacleInfo_ShapeType;
(function (ToTheMoonObstacleInfo_ShapeType) {
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE = 0;
     */
    ToTheMoonObstacleInfo_ShapeType[ToTheMoonObstacleInfo_ShapeType["OBSTACLE_SHAPE_CAPSULE"] = 0] = "OBSTACLE_SHAPE_CAPSULE";
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_BOX = 1;
     */
    ToTheMoonObstacleInfo_ShapeType[ToTheMoonObstacleInfo_ShapeType["OBSTACLE_SHAPE_BOX"] = 1] = "OBSTACLE_SHAPE_BOX";
})(ToTheMoonObstacleInfo_ShapeType = exports.ToTheMoonObstacleInfo_ShapeType || (exports.ToTheMoonObstacleInfo_ShapeType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ToTheMoonObstacleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ToTheMoonObstacleInfo", [
            { no: 1, name: "handle_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "type", kind: "enum", T: () => ["ToTheMoonObstacleInfo.ShapeType", ToTheMoonObstacleInfo_ShapeType, "SHAPE_TYPE_"] },
            { no: 7, name: "half_extents", kind: "message", T: () => Vector_1.Vector },
            { no: 11, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "rotation", kind: "message", T: () => MathQuaternion_1.MathQuaternion }
        ]);
    }
    create(value) {
        const message = { handleId: 0, type: 0 };
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
                case /* int32 handle_id */ 1:
                    message.handleId = reader.int32();
                    break;
                case /* ToTheMoonObstacleInfo.ShapeType type */ 8:
                    message.type = reader.int32();
                    break;
                case /* Vector half_extents */ 7:
                    message.halfExtents = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.halfExtents);
                    break;
                case /* Vector center */ 11:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* MathQuaternion rotation */ 12:
                    message.rotation = MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
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
        /* int32 handle_id = 1; */
        if (message.handleId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.handleId);
        /* ToTheMoonObstacleInfo.ShapeType type = 8; */
        if (message.type !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.type);
        /* Vector half_extents = 7; */
        if (message.halfExtents)
            Vector_1.Vector.internalBinaryWrite(message.halfExtents, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector center = 11; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MathQuaternion rotation = 12; */
        if (message.rotation)
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ToTheMoonObstacleInfo
 */
exports.ToTheMoonObstacleInfo = new ToTheMoonObstacleInfo$Type();
