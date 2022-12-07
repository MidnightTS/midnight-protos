"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObstacleInfo = exports.ObstacleInfo_ShapeType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const Vector3Int_1 = require("./Vector3Int");
const MathQuaternion_1 = require("./MathQuaternion");
/**
 * @generated from protobuf enum ObstacleInfo.ShapeType
 */
var ObstacleInfo_ShapeType;
(function (ObstacleInfo_ShapeType) {
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE = 0;
     */
    ObstacleInfo_ShapeType[ObstacleInfo_ShapeType["OBSTACLE_SHAPE_CAPSULE"] = 0] = "OBSTACLE_SHAPE_CAPSULE";
    /**
     * @generated from protobuf enum value: SHAPE_TYPE_OBSTACLE_SHAPE_BOX = 1;
     */
    ObstacleInfo_ShapeType[ObstacleInfo_ShapeType["OBSTACLE_SHAPE_BOX"] = 1] = "OBSTACLE_SHAPE_BOX";
})(ObstacleInfo_ShapeType = exports.ObstacleInfo_ShapeType || (exports.ObstacleInfo_ShapeType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ObstacleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ObstacleInfo", [
            { no: 11, name: "rotation", kind: "message", T: () => MathQuaternion_1.MathQuaternion },
            { no: 2, name: "shape", kind: "enum", T: () => ["ObstacleInfo.ShapeType", ObstacleInfo_ShapeType, "SHAPE_TYPE_"] },
            { no: 4, name: "extents", kind: "message", T: () => Vector3Int_1.Vector3Int },
            { no: 7, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 10, name: "obstacle_id", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { shape: 0, obstacleId: 0 };
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
                case /* MathQuaternion rotation */ 11:
                    message.rotation = MathQuaternion_1.MathQuaternion.internalBinaryRead(reader, reader.uint32(), options, message.rotation);
                    break;
                case /* ObstacleInfo.ShapeType shape */ 2:
                    message.shape = reader.int32();
                    break;
                case /* Vector3Int extents */ 4:
                    message.extents = Vector3Int_1.Vector3Int.internalBinaryRead(reader, reader.uint32(), options, message.extents);
                    break;
                case /* Vector center */ 7:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* int32 obstacle_id */ 10:
                    message.obstacleId = reader.int32();
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
        /* MathQuaternion rotation = 11; */
        if (message.rotation)
            MathQuaternion_1.MathQuaternion.internalBinaryWrite(message.rotation, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* ObstacleInfo.ShapeType shape = 2; */
        if (message.shape !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.shape);
        /* Vector3Int extents = 4; */
        if (message.extents)
            Vector3Int_1.Vector3Int.internalBinaryWrite(message.extents, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector center = 7; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 obstacle_id = 10; */
        if (message.obstacleId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.obstacleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ObstacleInfo
 */
exports.ObstacleInfo = new ObstacleInfo$Type();
