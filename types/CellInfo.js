"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneSurfaceMaterial_1 = require("./SceneSurfaceMaterial");
// @generated message type with reflection information, may provide speed optimized methods
class CellInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.CellInfo", [
            { no: 1, name: "type", kind: "enum", opt: true, T: () => ["com.midnights.game.SceneSurfaceMaterial", SceneSurfaceMaterial_1.SceneSurfaceMaterial] },
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
