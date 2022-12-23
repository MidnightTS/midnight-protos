"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureSeelieRegionData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class TreasureSeelieRegionData$Type extends runtime_5.MessageType {
    constructor() {
        super("TreasureSeelieRegionData", [
            { no: 15, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "region_center_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 8, name: "Unk3300_CPHOJNMEDBC", kind: "scalar", jsonName: "Unk3300CPHOJNMEDBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "region_radius", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "Unk3300_KGECOIIKJLJ", kind: "scalar", jsonName: "Unk3300KGECOIIKJLJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_AFAMHPCEIKP", kind: "scalar", jsonName: "Unk3300AFAMHPCEIKP", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "is_done", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { regionId: 0, isOpen: false, openTime: 0, unk3300CPHOJNMEDBC: 0, regionRadius: 0, unk3300KGECOIIKJLJ: 0, unk3300AFAMHPCEIKP: 0, isDone: false, sceneId: 0 };
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
                case /* uint32 region_id */ 15:
                    message.regionId = reader.uint32();
                    break;
                case /* bool is_open */ 1:
                    message.isOpen = reader.bool();
                    break;
                case /* uint32 open_time */ 11:
                    message.openTime = reader.uint32();
                    break;
                case /* Vector region_center_pos */ 9:
                    message.regionCenterPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.regionCenterPos);
                    break;
                case /* uint32 Unk3300_CPHOJNMEDBC = 8 [json_name = "Unk3300CPHOJNMEDBC"];*/ 8:
                    message.unk3300CPHOJNMEDBC = reader.uint32();
                    break;
                case /* float region_radius */ 6:
                    message.regionRadius = reader.float();
                    break;
                case /* uint32 Unk3300_KGECOIIKJLJ = 5 [json_name = "Unk3300KGECOIIKJLJ"];*/ 5:
                    message.unk3300KGECOIIKJLJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_AFAMHPCEIKP = 14 [json_name = "Unk3300AFAMHPCEIKP"];*/ 14:
                    message.unk3300AFAMHPCEIKP = reader.uint32();
                    break;
                case /* bool is_done */ 10:
                    message.isDone = reader.bool();
                    break;
                case /* uint32 scene_id */ 3:
                    message.sceneId = reader.uint32();
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
        /* uint32 region_id = 15; */
        if (message.regionId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.regionId);
        /* bool is_open = 1; */
        if (message.isOpen !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isOpen);
        /* uint32 open_time = 11; */
        if (message.openTime !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.openTime);
        /* Vector region_center_pos = 9; */
        if (message.regionCenterPos)
            Vector_1.Vector.internalBinaryWrite(message.regionCenterPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_CPHOJNMEDBC = 8 [json_name = "Unk3300CPHOJNMEDBC"]; */
        if (message.unk3300CPHOJNMEDBC !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300CPHOJNMEDBC);
        /* float region_radius = 6; */
        if (message.regionRadius !== 0)
            writer.tag(6, runtime_1.WireType.Bit32).float(message.regionRadius);
        /* uint32 Unk3300_KGECOIIKJLJ = 5 [json_name = "Unk3300KGECOIIKJLJ"]; */
        if (message.unk3300KGECOIIKJLJ !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300KGECOIIKJLJ);
        /* uint32 Unk3300_AFAMHPCEIKP = 14 [json_name = "Unk3300AFAMHPCEIKP"]; */
        if (message.unk3300AFAMHPCEIKP !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300AFAMHPCEIKP);
        /* bool is_done = 10; */
        if (message.isDone !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.isDone);
        /* uint32 scene_id = 3; */
        if (message.sceneId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureSeelieRegionData
 */
exports.TreasureSeelieRegionData = new TreasureSeelieRegionData$Type();
