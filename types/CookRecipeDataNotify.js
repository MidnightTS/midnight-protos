"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookRecipeDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CookRecipeData_1 = require("./CookRecipeData");
// @generated message type with reflection information, may provide speed optimized methods
class CookRecipeDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CookRecipeDataNotify", [
            { no: 1, name: "recipe_data", kind: "message", T: () => CookRecipeData_1.CookRecipeData }
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
                case /* CookRecipeData recipe_data */ 1:
                    message.recipeData = CookRecipeData_1.CookRecipeData.internalBinaryRead(reader, reader.uint32(), options, message.recipeData);
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
        /* CookRecipeData recipe_data = 1; */
        if (message.recipeData)
            CookRecipeData_1.CookRecipeData.internalBinaryWrite(message.recipeData, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CookRecipeDataNotify
 */
exports.CookRecipeDataNotify = new CookRecipeDataNotify$Type();
