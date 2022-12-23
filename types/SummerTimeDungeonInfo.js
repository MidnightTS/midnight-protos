"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeDungeonInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SummerTimeDungeonInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SummerTimeDungeonInfo", [
            { no: 9, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_GMKMNHIBPEP", kind: "scalar", jsonName: "Unk3300GMKMNHIBPEP", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_HJHODMOIMKG", kind: "scalar", jsonName: "Unk3300HJHODMOIMKG", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_GALEDJLAIPM", kind: "scalar", jsonName: "Unk3300GALEDJLAIPM", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "Unk3300_EGGFJCICOBD", kind: "scalar", jsonName: "Unk3300EGGFJCICOBD", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dungeonId: 0, unk3300GMKMNHIBPEP: 0, unk3300HJHODMOIMKG: 0, unk3300GALEDJLAIPM: 0, unk3300EGGFJCICOBD: 0 };
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
                case /* uint32 dungeon_id */ 9:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GMKMNHIBPEP = 1 [json_name = "Unk3300GMKMNHIBPEP"];*/ 1:
                    message.unk3300GMKMNHIBPEP = reader.uint32();
                    break;
                case /* uint32 Unk3300_HJHODMOIMKG = 8 [json_name = "Unk3300HJHODMOIMKG"];*/ 8:
                    message.unk3300HJHODMOIMKG = reader.uint32();
                    break;
                case /* uint32 Unk3300_GALEDJLAIPM = 5 [json_name = "Unk3300GALEDJLAIPM"];*/ 5:
                    message.unk3300GALEDJLAIPM = reader.uint32();
                    break;
                case /* uint32 Unk3300_EGGFJCICOBD = 12 [json_name = "Unk3300EGGFJCICOBD"];*/ 12:
                    message.unk3300EGGFJCICOBD = reader.uint32();
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
        /* uint32 dungeon_id = 9; */
        if (message.dungeonId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.dungeonId);
        /* uint32 Unk3300_GMKMNHIBPEP = 1 [json_name = "Unk3300GMKMNHIBPEP"]; */
        if (message.unk3300GMKMNHIBPEP !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300GMKMNHIBPEP);
        /* uint32 Unk3300_HJHODMOIMKG = 8 [json_name = "Unk3300HJHODMOIMKG"]; */
        if (message.unk3300HJHODMOIMKG !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300HJHODMOIMKG);
        /* uint32 Unk3300_GALEDJLAIPM = 5 [json_name = "Unk3300GALEDJLAIPM"]; */
        if (message.unk3300GALEDJLAIPM !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300GALEDJLAIPM);
        /* uint32 Unk3300_EGGFJCICOBD = 12 [json_name = "Unk3300EGGFJCICOBD"]; */
        if (message.unk3300EGGFJCICOBD !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300EGGFJCICOBD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SummerTimeDungeonInfo
 */
exports.SummerTimeDungeonInfo = new SummerTimeDungeonInfo$Type();
