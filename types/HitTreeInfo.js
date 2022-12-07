"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTreeInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HitTreeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HitTreeInfo", [
            { no: 10, name: "tree_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "tree_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { treeType: 0 };
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
                case /* Vector tree_pos */ 10:
                    message.treePos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.treePos);
                    break;
                case /* uint32 tree_type */ 7:
                    message.treeType = reader.uint32();
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
        /* Vector tree_pos = 10; */
        if (message.treePos)
            Vector_1.Vector.internalBinaryWrite(message.treePos, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 tree_type = 7; */
        if (message.treeType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.treeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HitTreeInfo
 */
exports.HitTreeInfo = new HitTreeInfo$Type();
