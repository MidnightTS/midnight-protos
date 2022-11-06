"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellInfo = exports.MapInfo = exports.SceneSurfaceMaterial = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.SceneSurfaceMaterial
 */
var SceneSurfaceMaterial;
(function (SceneSurfaceMaterial) {
    /**
     * @generated from protobuf enum value: Invalid = 0;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Invalid"] = 0] = "Invalid";
    /**
     * @generated from protobuf enum value: Grass = 1;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Grass"] = 1] = "Grass";
    /**
     * @generated from protobuf enum value: Dirt = 2;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Dirt"] = 2] = "Dirt";
    /**
     * @generated from protobuf enum value: Rock = 3;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Rock"] = 3] = "Rock";
    /**
     * @generated from protobuf enum value: Snow = 4;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Snow"] = 4] = "Snow";
    /**
     * @generated from protobuf enum value: Water = 5;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Water"] = 5] = "Water";
    /**
     * @generated from protobuf enum value: Tile = 6;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Tile"] = 6] = "Tile";
    /**
     * @generated from protobuf enum value: Sand = 7;
     */
    SceneSurfaceMaterial[SceneSurfaceMaterial["Sand"] = 7] = "Sand";
})(SceneSurfaceMaterial = exports.SceneSurfaceMaterial || (exports.SceneSurfaceMaterial = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MapInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MapInfo", [
            { no: 1, name: "minx", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "maxx", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "minz", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "maxz", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "cells", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.CellInfo }
        ]);
    }
    create(value) {
        const message = { cells: [] };
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
                case /* optional int32 minx */ 1:
                    message.minx = reader.int32();
                    break;
                case /* optional int32 maxx */ 2:
                    message.maxx = reader.int32();
                    break;
                case /* optional int32 minz */ 3:
                    message.minz = reader.int32();
                    break;
                case /* optional int32 maxz */ 4:
                    message.maxz = reader.int32();
                    break;
                case /* repeated com.midnights.game.CellInfo cells */ 5:
                    message.cells.push(exports.CellInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 minx = 1; */
        if (message.minx !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.minx);
        /* optional int32 maxx = 2; */
        if (message.maxx !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.maxx);
        /* optional int32 minz = 3; */
        if (message.minz !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.minz);
        /* optional int32 maxz = 4; */
        if (message.maxz !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.maxz);
        /* repeated com.midnights.game.CellInfo cells = 5; */
        for (let i = 0; i < message.cells.length; i++)
            exports.CellInfo.internalBinaryWrite(message.cells[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MapInfo
 */
exports.MapInfo = new MapInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CellInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CellInfo", [
            { no: 1, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.SceneSurfaceMaterial", SceneSurfaceMaterial] },
            { no: 2, name: "y", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional com.midnights.game.SceneSurfaceMaterial type */ 1:
                    message.type = reader.int32();
                    break;
                case /* optional int32 y */ 2:
                    message.y = reader.int32();
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
        /* optional com.midnights.game.SceneSurfaceMaterial type = 1; */
        if (message.type !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.type);
        /* optional int32 y = 2; */
        if (message.y !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.y);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.CellInfo
 */
exports.CellInfo = new CellInfo$Type();
