"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CellInfo_1 = require("./CellInfo");
// @generated message type with reflection information, may provide speed optimized methods
class MapInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MapInfo", [
            { no: 1, name: "minx", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "maxx", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "minz", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "maxz", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "cells", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CellInfo_1.CellInfo }
        ]);
    }
    create(value) {
        const message = { minx: 0, maxx: 0, minz: 0, maxz: 0, cells: [] };
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
                case /* int32 minx */ 1:
                    message.minx = reader.int32();
                    break;
                case /* int32 maxx */ 2:
                    message.maxx = reader.int32();
                    break;
                case /* int32 minz */ 3:
                    message.minz = reader.int32();
                    break;
                case /* int32 maxz */ 4:
                    message.maxz = reader.int32();
                    break;
                case /* repeated CellInfo cells */ 5:
                    message.cells.push(CellInfo_1.CellInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 minx = 1; */
        if (message.minx !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.minx);
        /* int32 maxx = 2; */
        if (message.maxx !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.maxx);
        /* int32 minz = 3; */
        if (message.minz !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.minz);
        /* int32 maxz = 4; */
        if (message.maxz !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.maxz);
        /* repeated CellInfo cells = 5; */
        for (let i = 0; i < message.cells.length; i++)
            CellInfo_1.CellInfo.internalBinaryWrite(message.cells[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MapInfo
 */
exports.MapInfo = new MapInfo$Type();
