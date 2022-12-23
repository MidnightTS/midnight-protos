"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CookRecipeData_1 = require("./CookRecipeData");
// @generated message type with reflection information, may provide speed optimized methods
class CookDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CookDataNotify", [
            { no: 15, name: "recipe_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CookRecipeData_1.CookRecipeData },
            { no: 9, name: "grade", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { recipeDataList: [], grade: 0 };
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
                case /* repeated CookRecipeData recipe_data_list */ 15:
                    message.recipeDataList.push(CookRecipeData_1.CookRecipeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 grade */ 9:
                    message.grade = reader.uint32();
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
        /* repeated CookRecipeData recipe_data_list = 15; */
        for (let i = 0; i < message.recipeDataList.length; i++)
            CookRecipeData_1.CookRecipeData.internalBinaryWrite(message.recipeDataList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 grade = 9; */
        if (message.grade !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.grade);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CookDataNotify
 */
exports.CookDataNotify = new CookDataNotify$Type();
