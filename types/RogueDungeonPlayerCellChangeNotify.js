"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueDungeonPlayerCellChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class RogueDungeonPlayerCellChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueDungeonPlayerCellChangeNotify", [
            { no: 4, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "old_cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { cellId: 0, oldCellId: 0 };
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
                case /* uint32 cell_id */ 4:
                    message.cellId = reader.uint32();
                    break;
                case /* uint32 old_cell_id */ 7:
                    message.oldCellId = reader.uint32();
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
        /* uint32 cell_id = 4; */
        if (message.cellId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.cellId);
        /* uint32 old_cell_id = 7; */
        if (message.oldCellId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.oldCellId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueDungeonPlayerCellChangeNotify
 */
exports.RogueDungeonPlayerCellChangeNotify = new RogueDungeonPlayerCellChangeNotify$Type();
