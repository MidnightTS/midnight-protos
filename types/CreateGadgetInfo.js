"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGadgetInfo_Chest = exports.CreateGadgetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GadgetBornType_1 = require("./GadgetBornType");
// @generated message type with reflection information, may provide speed optimized methods
class CreateGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CreateGadgetInfo", [
            { no: 1, name: "born_type", kind: "enum", T: () => ["GadgetBornType", GadgetBornType_1.GadgetBornType, "GADGET_BORN_TYPE_"] },
            { no: 2, name: "chest", kind: "message", T: () => exports.CreateGadgetInfo_Chest }
        ]);
    }
    create(value) {
        const message = { bornType: 0 };
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
                case /* GadgetBornType born_type */ 1:
                    message.bornType = reader.int32();
                    break;
                case /* CreateGadgetInfo.Chest chest */ 2:
                    message.chest = exports.CreateGadgetInfo_Chest.internalBinaryRead(reader, reader.uint32(), options, message.chest);
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
        /* GadgetBornType born_type = 1; */
        if (message.bornType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.bornType);
        /* CreateGadgetInfo.Chest chest = 2; */
        if (message.chest)
            exports.CreateGadgetInfo_Chest.internalBinaryWrite(message.chest, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CreateGadgetInfo
 */
exports.CreateGadgetInfo = new CreateGadgetInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateGadgetInfo_Chest$Type extends runtime_5.MessageType {
    constructor() {
        super("CreateGadgetInfo.Chest", [
            { no: 1, name: "chest_drop_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_show_cutscene", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { chestDropId: 0, isShowCutscene: false };
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
                case /* uint32 chest_drop_id */ 1:
                    message.chestDropId = reader.uint32();
                    break;
                case /* bool is_show_cutscene */ 2:
                    message.isShowCutscene = reader.bool();
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
        /* uint32 chest_drop_id = 1; */
        if (message.chestDropId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.chestDropId);
        /* bool is_show_cutscene = 2; */
        if (message.isShowCutscene !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isShowCutscene);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CreateGadgetInfo.Chest
 */
exports.CreateGadgetInfo_Chest = new CreateGadgetInfo_Chest$Type();
