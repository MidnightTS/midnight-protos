"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorPointData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointData$Type extends runtime_5.MessageType {
    constructor() {
        super("AnchorPointData", [
            { no: 3, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 9, name: "anchor_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, endTime: 0, anchorPointId: 0 };
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
                case /* uint32 scene_id */ 3:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector rot */ 4:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* uint32 end_time */ 8:
                    message.endTime = reader.uint32();
                    break;
                case /* Vector pos */ 11:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 anchor_point_id */ 9:
                    message.anchorPointId = reader.uint32();
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
        /* uint32 scene_id = 3; */
        if (message.sceneId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* Vector rot = 4; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 end_time = 8; */
        if (message.endTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.endTime);
        /* Vector pos = 11; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 anchor_point_id = 9; */
        if (message.anchorPointId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.anchorPointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AnchorPointData
 */
exports.AnchorPointData = new AnchorPointData$Type();
