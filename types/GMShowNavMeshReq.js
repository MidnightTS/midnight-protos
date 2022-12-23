"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMShowNavMeshReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class GMShowNavMeshReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GMShowNavMeshReq", [
            { no: 3, name: "extent", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "center", kind: "message", T: () => Vector_1.Vector }
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
                case /* Vector extent */ 3:
                    message.extent = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.extent);
                    break;
                case /* Vector center */ 4:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
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
        /* Vector extent = 3; */
        if (message.extent)
            Vector_1.Vector.internalBinaryWrite(message.extent, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector center = 4; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GMShowNavMeshReq
 */
exports.GMShowNavMeshReq = new GMShowNavMeshReq$Type();
