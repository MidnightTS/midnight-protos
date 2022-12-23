"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BartenderActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BartenderTaskInfo_1 = require("./BartenderTaskInfo");
const BartenderLevelInfo_1 = require("./BartenderLevelInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BartenderActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BartenderActivityDetailInfo", [
            { no: 15, name: "is_content_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "unlock_level_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BartenderLevelInfo_1.BartenderLevelInfo },
            { no: 3, name: "unlock_item_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "unlock_formula_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "unlock_task_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BartenderTaskInfo_1.BartenderTaskInfo },
            { no: 9, name: "is_develop_module_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isContentClosed: false, unlockLevelList: [], unlockItemList: [], unlockFormulaList: [], unlockTaskList: [], isDevelopModuleOpen: false };
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
                case /* bool is_content_closed */ 15:
                    message.isContentClosed = reader.bool();
                    break;
                case /* repeated BartenderLevelInfo unlock_level_list */ 10:
                    message.unlockLevelList.push(BartenderLevelInfo_1.BartenderLevelInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_item_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockItemList.push(reader.uint32());
                    else
                        message.unlockItemList.push(reader.uint32());
                    break;
                case /* repeated uint32 unlock_formula_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockFormulaList.push(reader.uint32());
                    else
                        message.unlockFormulaList.push(reader.uint32());
                    break;
                case /* repeated BartenderTaskInfo unlock_task_list */ 5:
                    message.unlockTaskList.push(BartenderTaskInfo_1.BartenderTaskInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_develop_module_open */ 9:
                    message.isDevelopModuleOpen = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_content_closed = 15; */
        if (message.isContentClosed !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isContentClosed);
        /* repeated BartenderLevelInfo unlock_level_list = 10; */
        for (let i = 0; i < message.unlockLevelList.length; i++)
            BartenderLevelInfo_1.BartenderLevelInfo.internalBinaryWrite(message.unlockLevelList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_item_list = 3; */
        if (message.unlockItemList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockItemList.length; i++)
                writer.uint32(message.unlockItemList[i]);
            writer.join();
        }
        /* repeated uint32 unlock_formula_list = 6; */
        if (message.unlockFormulaList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockFormulaList.length; i++)
                writer.uint32(message.unlockFormulaList[i]);
            writer.join();
        }
        /* repeated BartenderTaskInfo unlock_task_list = 5; */
        for (let i = 0; i < message.unlockTaskList.length; i++)
            BartenderTaskInfo_1.BartenderTaskInfo.internalBinaryWrite(message.unlockTaskList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_develop_module_open = 9; */
        if (message.isDevelopModuleOpen !== false)
            writer.tag(9, runtime_2.WireType.Varint).bool(message.isDevelopModuleOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BartenderActivityDetailInfo
 */
exports.BartenderActivityDetailInfo = new BartenderActivityDetailInfo$Type();
