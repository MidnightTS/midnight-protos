"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RogueCellInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueCellState_1 = require("./RogueCellState");
// @generated message type with reflection information, may provide speed optimized methods
class RogueCellInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("RogueCellInfo", [
            { no: 1, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cell_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "cell_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "state", kind: "enum", T: () => ["RogueCellState", RogueCellState_1.RogueCellState, "ROGUE_CELL_STATE_"] },
            { no: 13, name: "cell_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, cellConfigId: 0, cellId: 0, state: 0, cellType: 0 };
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
                case /* uint32 dungeon_id */ 1:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 cell_config_id */ 14:
                    message.cellConfigId = reader.uint32();
                    break;
                case /* uint32 cell_id */ 2:
                    message.cellId = reader.uint32();
                    break;
                case /* RogueCellState state */ 9:
                    message.state = reader.int32();
                    break;
                case /* uint32 cell_type */ 13:
                    message.cellType = reader.uint32();
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
        /* uint32 dungeon_id = 1; */
        if (message.dungeonId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 cell_config_id = 14; */
        if (message.cellConfigId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.cellConfigId);
        /* uint32 cell_id = 2; */
        if (message.cellId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.cellId);
        /* RogueCellState state = 9; */
        if (message.state !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.state);
        /* uint32 cell_type = 13; */
        if (message.cellType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.cellType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RogueCellInfo
 */
exports.RogueCellInfo = new RogueCellInfo$Type();
